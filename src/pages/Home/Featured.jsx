import SectionTitle from "../../components/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg"


const Featured = () => {
    return (
        <section className="featured-item text-white pt-8 my-20">
            <SectionTitle heading={"Featured Item"} subHeading={"check it out"}></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-14 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias delectus mollitia officiis? Dignissimos rem, nulla blanditiis molestiae mollitia laborum ad exercitationem tenetur nisi dolore quibusdam minus ducimus aliquam aut eveniet officia eos adipisci at ab neque veritatis. Quas dolorem repellendus recusandae nisi molestiae? Facere alias fuga obcaecati placeat rem.</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;