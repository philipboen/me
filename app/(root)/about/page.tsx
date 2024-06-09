const AboutPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <h1 className="font-serif text-3xl font-bold text-primary">About</h1>
      <p className="max-w-[500px] text-center text-lg italic text-muted-foreground max-sm:max-w-[400px] max-sm:px-2 max-sm:text-base">
        About page. This page will be updated with more information soon.
      </p>
    </div>
  );
};

export default AboutPage;
