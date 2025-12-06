import React, { useState } from 'react';
import styles from './ChapterTranslator.module.css';

interface ChapterTranslatorProps {
  children: React.ReactNode;
}

export default function ChapterTranslator({ children }: ChapterTranslatorProps) {
  const [translated, setTranslated] = useState(false);
  const [translatedContent, setTranslatedContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Recursively extract text from React children
  const extractText = (node: React.ReactNode): string => {
    if (typeof node === 'string') {
      return node;
    }
    
    if (typeof node === 'number') {
      return String(node);
    }
    
    if (node === null || node === undefined) {
      return '';
    }
    
    if (Array.isArray(node)) {
      return node.map(extractText).join(' ');
    }
    
    if (React.isValidElement(node)) {
      const props = node.props as { children?: React.ReactNode };
      if (props && props.children) {
        return extractText(props.children);
      }
    }
    
    return '';
  };

  // Free translation using MyMemory API (no backend needed)
  async function translateToUrdu(text: string): Promise<string> {
    // Split text into chunks (MyMemory has 500 char limit per request)
    const chunkSize = 500;
    const chunks: string[] = [];
    
    for (let i = 0; i < text.length; i += chunkSize) {
      chunks.push(text.substring(i, i + chunkSize));
    }

    try {
      const translatedChunks = await Promise.all(
        chunks.map(async (chunk) => {
          const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
              chunk
            )}&langpair=en|ur`
          );
          
          if (!response.ok) {
            throw new Error('Translation API request failed');
          }
          
          const data = await response.json();
          
          if (data.responseStatus !== 200) {
            throw new Error(data.responseDetails || 'Translation failed');
          }
          
          return data.responseData.translatedText;
        })
      );

      return translatedChunks.join(' ');
    } catch (err) {
      console.error('Translation error:', err);
      throw new Error('Failed to translate content. Please try again.');
    }
  }

  const handleTranslate = async () => {
    if (translated) {
      // Switch back to English
      setTranslated(false);
      setTranslatedContent('');
      setError(null);
      return;
    }

    // Translate to Urdu
    setIsLoading(true);
    setError(null);

    try {
      const textToTranslate = extractText(children);
      
      if (!textToTranslate || textToTranslate.trim() === '') {
        throw new Error('No text content found to translate');
      }

      console.log('Text to translate:', textToTranslate.substring(0, 100) + '...');
      
      const urduText = await translateToUrdu(textToTranslate);
      
      console.log('Translated text:', urduText.substring(0, 100) + '...');
      
      setTranslatedContent(urduText);
      setTranslated(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Translation failed. Please try again.';
      setError(errorMessage);
      console.error('Translation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Render content based on translation state
  const renderContent = () => {
    if (translated && translatedContent) {
      return (
        <div 
          className={styles.urduContent}
          style={{ 
            direction: 'rtl', 
            textAlign: 'right',
            fontFamily: 'Noto Nastaliq Urdu, "Jameel Noori Nastaleeq", "Urdu Typesetting", Arial, sans-serif',
            lineHeight: '2.2',
            fontSize: '1.15em',
            whiteSpace: 'pre-wrap'
          }}
        >
          {translatedContent}
        </div>
      );
    }
    
    return <div className={styles.englishContent}>{children}</div>;
  };

  return (
    <div className={styles.translatorWrapper}>
      <button
        className={styles.translateButton}
        onClick={handleTranslate}
        disabled={isLoading}
        aria-label={translated ? 'Switch to English' : 'Translate to Urdu'}
      >
        {isLoading ? (
          <span className={styles.buttonContent}>
            <span className={styles.loader}></span>
            Translating...
          </span>
        ) : translated ? (
          <span className={styles.buttonContent}>
            <span className={styles.icon}>🇬🇧</span>
            Show English
          </span>
        ) : (
          <span className={styles.buttonContent}>
            <span className={styles.icon}>🇵🇰</span>
            ترجمہ کریں (Urdu)
          </span>
        )}
      </button>

      {error && (
        <div className={styles.errorMessage}>
          <span>{error}</span>
          <button 
            onClick={handleTranslate} 
            className={styles.retryButton}
          >
            Retry
          </button>
        </div>
      )}

      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
}