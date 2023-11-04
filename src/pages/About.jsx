import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center bg-transparent">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We Love Our
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-wildest">
              <Link to="/products" className="btn btn-primary">
                Our Products
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem error
          placeat necessitatibus id nesciunt debitis soluta adipisci maxime
          officiis. Voluptatibus natus doloribus et perferendis obcaecati, eius
          in id temporibus, minima exercitationem ab dicta rem incidunt
          veritatis enim cupiditate quod delectus! Illum, aperiam perferendis.
          Illum qui quo necessitatibus, commodi sunt aliquam.
        </p>
      </div>
    </>
  );
};

export default About;
