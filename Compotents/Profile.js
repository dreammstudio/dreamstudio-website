import React from "react";

function Profile({ profile }) {
  console.log(profile);
  return (
    <div data-aos="fade">
      <div className="flex-auto sm:gap-4 sm:flex">
        <img
          src={
            profile.discord_user.avatar !== null
              ? `https://cdn.discordapp.com/avatars/${profile.discord_user.id}/${profile.discord_user.avatar}.png?size=2048`
              : "https://cdn.discordapp.com/embed/avatars/1.png"
          }
          className="rounded mx-auto sm:mx-0 mb-4 sm:mb-0 w-52 h-52"
        />
        <span>
          <h1 className="text-4xl font-bold leading-tight text-center sm:text-left">
            {profile.discord_user.username +
              "#" +
              profile.discord_user.discriminator}
          </h1>
          <p className="opacity-75 mx-auto sm:mx-0 text-center sm:text-left sm:w-3/4 break-all">
            I am a student from Turkey I have been in coding since 2019. I am a
            newbie full stack developer. I have been working on web development
            for the last 1 years.
          </p>
          <div className="mx-auto sm:mx-0 w-80 h-26 flex bg-primary rounded px-4 py-2 my-4">
            {!profile.listening_to_spotify ? (
              <div className="flex align-middle justify-center my-auto w-full">
                  <img src="/images/spotify.png" className=" w-8 h-8 mr-1" ></img>
                <h1 className="text-center text-gray-200 text-lg font-bold center">
                  I am not listening anything right now
                </h1>
              </div>
            ) : (
              <div className="flex align-middle justify-beetween my-auto w-full gap-2 relative">
                <img
                    src={
                        profile.spotify.album_art_url
                    }
                    className="w-20 h-20 rounded  mr-1"
                ></img>
                <h1 className="text-2xl font-bold text-gray-100">{profile.spotify.song} <br/> <span className="text-xl font-semibold text-gray-300">by {profile.spotify.artist}</span></h1>
              <img src="/images/spotify.png" className="absolute w-8 h-8 top-0 right-0 opacity-75"></img>
              </div>
            )}
          </div>
        </span>
      </div>
    </div>
  );
}

export default Profile;
