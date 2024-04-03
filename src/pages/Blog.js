import React from "react";
import Card from '../components/BlogCard'
import PageTitle from "../components/PageTitle";
import codeImage from '../style/img/blog/coder.jpg'
import productSell from "../style/img/blog/croissance.jpg"
import googleSeo from "../style/img/blog/google.jpg"
import responsiveCode from '../style/img/blog/screens.jpg'
import seo from '../style/img/blog/seo.jpg'
import techno from '../style/img/blog/technos.png'

const Blog = () =>{
    const description = "Some quick example text to build on the card title and make up the bulk of the card's content."
    const button = "Lire la suite"

    return(
        <div>
            <PageTitle
            title="BLOG"
            description="Retrouvez ici quelques articles sur le developpement web." 
            />
            <div className="container-fluid px-sm-4">
                <div className="row mx-3 mb-5">
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <Card
                            imageSrc={codeImage}
                            alt="code article"
                            arcticleTitle="Coder son site en HTML/CSS"
                            articleDescription={description}
                            textButton={button}
                            publishDate="Publie le 22 aout 2022"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <Card
                            imageSrc={productSell}
                            alt="Vendre ses produits sur le web"
                            arcticleTitle="Vendre ses produits sur le web"
                            articleDescription={description}
                            textButton={button}
                            publishDate="Publie le 20 aout 2022"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <Card
                            imageSrc={googleSeo}
                            alt="Se positionner sur google"
                            arcticleTitle="Se positionner sur google"
                            articleDescription={description}
                            textButton={button}
                            publishDate="Publie le 1 aout 2022"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <Card
                            imageSrc={responsiveCode}
                            alt="Coder en responsive design"
                            arcticleTitle="Coder en responsive design"
                            articleDescription={description}
                            textButton={button}
                            publishDate="Publie le 31 juillet 2022"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <Card
                            imageSrc={seo}
                            alt="Technique de referencement"
                            arcticleTitle="Technique de referencement"
                            articleDescription={description}
                            textButton={button}
                            publishDate="Publie le 30 juillet 2022"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <Card
                            imageSrc={techno}
                            alt="Apprendre a coder"
                            arcticleTitle="Apprendre a coder"
                            articleDescription={description}
                            textButton={button}
                            publishDate="Publie le 12 juillet 2022"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog