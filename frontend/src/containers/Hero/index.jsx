import SearchBar from '../../components/SearchBar';
import './index.scss';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="h-xl hero__heading">Never Pay More, Not A Penny More!</h1>
      <h2 className="h-s hero__sub-heading">Buy when price drops, track price drops with UnPrice!</h2>
      <SearchBar button="Track Price" placeholder="Paste the Product URL" />
    </section>
  );
};

export default Hero;
