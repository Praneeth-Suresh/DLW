import React, { useState, useRef } from 'react';

function InputBox({ setClick }) {
  const [inputValue, setInputValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    // Auto-expand the textarea
    if (event.target.value) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  const handleOnSubmit = () => {
    // Function to handle the submit action
    console.log(inputValue);
    console.log('Selected file:', selectedFile);
    setClick(1);
    // Reset after submit
    setInputValue('');
    setSelectedFile(null);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log('File selected:', file.name);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={{ 
      position: 'relative', 
      width: 'calc(100% - 6rem)', 
      margin: '50px auto',
      maxWidth: '800px'
    }}>
      <div style={{
        position: 'relative',
        border: '0.5px solid rgb(0, 0, 1)',
        borderRadius: '12px',
        backgroundColor: 'rgb(0, 0, 1)',
        boxShadow: '0 2px 5px rgba(135, 133, 133, 0.05)',
        overflow: 'hidden'
      }}>
        {/* TextArea */}
        <textarea
          value={inputValue}
          onChange={handleChange}
          placeholder="Insert Your URL..."
          style={{
            width: '100%',
            minHeight: isExpanded ? '120px' : '60px',
            maxHeight: '200px',
            padding: '16px 60px 40px 16px', // Extra padding at bottom for buttons
            borderRadius: '15px',
            backgroundColor: '#rgb(35 38 44)',
            border: 'none',
            resize: 'none',
            outline: 'none',
            fontSize: '16px',
            lineHeight: '1.5',
            transition: 'min-height 0.2s ease',
            
          }}
        />

        {/* File upload & submit buttons container */}
        <div style={{
          position: 'absolute',
          bottom: '8px',
          right: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          {/* Hidden file input */}
          <input 
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept=".pdf,.doc,.docx,image/*"
            style={{ display: 'none' }}
          />
          
          {/* File upload button */}
          <button
            onClick={triggerFileInput}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#E1D9D1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5px'
            }}
            title="Upload file"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13V21M12 21H9M12 21H15M3 13.5V6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V13.5M3 13.5C3 15.1569 4.34315 16.5 6 16.5H18C19.6569 16.5 21 15.1569 21 13.5M3 13.5C3 15.1569 4.34315 16.5 6 16.5H18C19.6569 16.5 21 15.1569 21 13.5" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Submit button */}
          <button
            onClick={handleOnSubmit}
            disabled={!inputValue.trim()}
            style={{
              background: inputValue.trim() ? '#6E41E2' : '#36454F',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 12px',
              cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6667 1.33331L7.33337 8.66665M14.6667 1.33331L10 14.6666L7.33337 8.66665M14.6667 1.33331L1.33337 5.99998L7.33337 8.66665" 
                    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* File preview (optional) */}
      {selectedFile && (
        <div style={{
          marginTop: '8px',
          padding: '8px 12px',
          backgroundColor: '#F3F4F6',
          borderRadius: '8px',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.50016 14.1667H12.5002M7.50016 11.6667H12.5002M13.3335 17.5H6.66683C5.28611 17.5 4.16683 16.3807 4.16683 15V5.00001C4.16683 3.6193 5.28611 2.50001 6.66683 2.50001H10.5835L15.8335 7.75001V15C15.8335 16.3807 14.7142 17.5 13.3335 17.5Z" 
                  stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{selectedFile.name}</span>
          <button 
            onClick={() => setSelectedFile(null)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#6B7280',
              marginLeft: 'auto'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12M4 4L12 12" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default InputBox;