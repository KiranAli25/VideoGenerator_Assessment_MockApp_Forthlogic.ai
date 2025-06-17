import React, { useState } from 'react';

function VideoGenerator() {
  const [prompt, setPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      // Call your API here
      const response = await generateVideo({ prompt });
      setVideoUrl(response.videoUrl);
    } catch (error) {
      console.error('Error generating video:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setPrompt('');
    setVideoUrl(null);
  };

  return (
    <div>
      <h1>AI Video Generator</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGenerate();
        }}
      >
        <input
          type="text"
          placeholder="Enter your prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div id="flex">
          <button type="submit" disabled={loading || !prompt}>
            {loading ? 'Generating...' : 'Generate Video'}
          </button>
          {/* Add Clear button */}
          <button type="button" onClick={handleClear} style={{ marginLeft: '10px' }}>
           Clear
          </button>
        </div>
      </form>

      {videoUrl && (
        <div style={{ marginTop: '20px' }}>
          <video width="600" controls>
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}

// Mock function for testing
const generateVideo = async ({ prompt }: { prompt: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  };
};

export default VideoGenerator;