import Blog from "./Blog";
import OpinionArticle from "./OpinionArticle";
import PublicationsInPeerReviewed from "./PublicationsInPeerReviewed";
import Report from "./Report";

const WritingsAndPublications = () => {
  return (
    <div className="bg-slate-50">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16 py-16 ">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
          Writings and Publications
          <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
        </h2>

        {/* Content  */}
        <div>
          <p className="text-gray-700 leading-relaxed text-justify pt-4">
            An integral part of my public health journey involves conducting
            research and sharing findings with diverse audiences. I have first
            authored and co-authored several scientific articles published in
            esteemed peer-reviewed journals. Beyond academic publications, I
            regularly contribute columns and opinion pieces to newspapers and
            various platforms, addressing critical public health and social
            issues.
          </p>
          <p className="text-gray-700 leading-relaxed text-xl max-w-3xl mx-auto  text-justify pt-4">
            As a passionate traveler, I have also documented my journeys and
            published a collection of travel essays in book form. My work spans
            the following categories:
          </p>
        </div>

        {/* Publications in Peer Reviewed Journals */}
        <PublicationsInPeerReviewed />

        {/* Opinion articles */}
        <OpinionArticle />

        {/* Blog */}
        <Blog />

        {/* Report */}
        <Report />
      </div>
    </div>
  );
};

export default WritingsAndPublications;
