import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingList = () => {
    return (
        <div className="recommended-container">
            <div className="container-card-movie loading">
                <SkeletonTheme baseColor="#161d2f" highlightColor="#5a698f">
                    <Skeleton borderRadius={15} height={120} width={150} />
                    <div style={{height: '7px'}} />
                    <Skeleton borderRadius={15} height={25} width={150} />
                </SkeletonTheme>
            </div>
            <div className="container-card-movie loading">
                <SkeletonTheme baseColor="#161d2f" highlightColor="#5a698f">
                    <Skeleton borderRadius={15} height={120} width={150} />
                    <div style={{height: '7px'}} />
                    <Skeleton borderRadius={15} height={25} width={150} />
                </SkeletonTheme>
            </div>
            <div className="container-card-movie loading">
                <SkeletonTheme baseColor="#161d2f" highlightColor="#5a698f">
                    <Skeleton borderRadius={15} height={120} width={150} />
                    <div style={{height: '7px'}} />
                    <Skeleton borderRadius={15} height={25} width={150} />
                </SkeletonTheme>
            </div>
            <div className="container-card-movie loading">
                <SkeletonTheme baseColor="#161d2f" highlightColor="#5a698f">
                    <Skeleton borderRadius={15} height={120} width={150} />
                    <div style={{height: '7px'}} />
                    <Skeleton borderRadius={15} height={25} width={150} />
                </SkeletonTheme>
            </div>
            <div className="container-card-movie loading">
                <SkeletonTheme baseColor="#161d2f" highlightColor="#5a698f">
                    <Skeleton borderRadius={15} height={120} width={150} />
                    <div style={{height: '7px'}} />
                    <Skeleton borderRadius={15} height={25} width={150} />
                </SkeletonTheme>
            </div>
            <div className="container-card-movie loading">
                <SkeletonTheme baseColor="#161d2f" highlightColor="#5a698f">
                    <Skeleton borderRadius={15} height={120} width={150} />
                    <div style={{height: '7px'}} />
                    <Skeleton borderRadius={15} height={25} width={150} />
                </SkeletonTheme>
            </div>
        </div>
    );
};

export default LoadingList;
