import config from '@/config';

const Logo = () => {
  return (
    <span className="font-extrabold bg-gradient font-title uppercase text-3xl whitespace-nowrap text-transparent bg-clip-text tracking-tighter">
      {config.siteName}
    </span>
  );
};

export default Logo;
