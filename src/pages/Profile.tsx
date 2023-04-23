import { useAuth0 } from "@auth0/auth0-react";
import { PageLayout } from "../components/page-layout";
import { LogoutButton } from "../components/buttons/logout-button";

const Profile = () => {
    const { user } = useAuth0();

    if (!user) {
        return null;
    }

    console.log(user)

    return (
        <PageLayout>
            <div className="container-profile">
                <div className="container-profile__header">
                    <img
                        src={user.picture}
                        alt=""
                        className="container-profile__header__avatar"
                    />
                </div>
                <div className="container-profile__details">
                    {typeof user.name !== 'undefined' && (
                        <div className="details__item">
                            <span className="details__item__term">Name</span>
                            <span className="details__item__info">
                                {user.name}
                            </span>
                        </div>
                    )}
                    {typeof user.nickname !== 'undefined' && (
                        <div className="details__item">
                            <span className="details__item__term">
                                Username
                            </span>
                            <span className="details__item__info">
                                {user.nickname}
                            </span>
                        </div>
                    )}
                    {typeof user.email !== 'undefined' && (
                        <div className="details__item">
                            <span className="details__item__term">Email</span>
                            <span className="details__item__info">
                                {user.email}
                            </span>
                        </div>
                    )}
                    {typeof user.address !== 'undefined' && (
                        <div className="details__item">
                            <span className="details__item__term">Address</span>
                            <span className="details__item__info">
                                {user.address}
                            </span>
                        </div>
                    )}
                    {typeof user.birthdate !== 'undefined' && (
                        <div className="details__item">
                            <span className="details__item__term">Birthdate</span>
                            <span className="details__item__info">
                                {user.address}
                            </span>
                        </div>
                    )}
                    {typeof user.gender !== 'undefined' && (
                        <div className="details__item">
                            <span className="details__item__term">Gender</span>
                            <span className="details__item__info">
                                {user.address}
                            </span>
                        </div>
                    )}
                    {typeof user.phone_number !== 'undefined' && (
                        <div className="details__item">
                            <span className="details__item__term">Phone Number</span>
                            <span className="details__item__info">
                                {user.address}
                            </span>
                        </div>
                    )}
                </div>
                <div className="bottom-logout">
                    <LogoutButton />
                </div>
            </div>
        </PageLayout>
    );
};

export default Profile;
