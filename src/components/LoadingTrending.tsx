import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingTrending = () => {
    return (
        <div className="container-trending">
            <div className="loading-trending">
                <SkeletonTheme baseColor="#161d2f" highlightColor="#5a698f">
                    <Skeleton borderRadius={15} height={120} width={230} />
                </SkeletonTheme>
            </div>
            <div className="loading-trending">
                <SkeletonTheme baseColor="#161d2f" highlightColor="#5a698f">
                    <Skeleton borderRadius={15} height={120} width={230} />
                </SkeletonTheme>
            </div>
            <div className="loading-trending">
                <SkeletonTheme baseColor="#161d2f" highlightColor="#5a698f">
                    <Skeleton borderRadius={15} height={120} width={230} />
                </SkeletonTheme>
            </div>
        </div>
    );
};

export default LoadingTrending;
