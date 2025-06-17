export const generateMarketingVideo = async (description: string) => {
  const response = await fetch('http://localhost:4000/api/generate-marketing-video', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description }),
  });
  return response.json();
};

export const generateRealEstateVideo = async (listingDetails: any) => {
  const response = await fetch('http://localhost:4000/api/generate-realestate-video', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ listingDetails }),
  });
  return response.json();
};

export const generateVideo = async ({ prompt }: { prompt: string }) => {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // Return a dummy video URL
  return {
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // sample video
  };
};