import React from 'react'

function Profile({profile}) {
    return (
        <div>
            <div className='flex-auto sm:gap-4 sm:flex'>
            <img
            src={profile.discord_user.avatar !== null ? `https://cdn.discordapp.com/avatars/${profile.discord_user.id}/${profile.discord_user.avatar}.png?size=2048` : "https://cdn.discordapp.com/embed/avatars/1.png"}
            className='rounded mx-auto sm:mx-0 mb-4 sm:mb-0 w-52 h-52'
            />
            <span>
            <h1 className='text-4xl font-bold leading-tight text-center sm:text-left'>{profile.discord_user.username + "#" + profile.discord_user.discriminator}</h1>
            <p className='opacity-75 mx-auto sm:mx-0 text-center sm:text-left sm:w-3/4 break-all'>I am a student from Turkey I have been in coding since 2019. I am a newbie full stack developer. I have been working on web development for the last 1 years.</p>
            <iframe
    src={`https://linkcord.swoth.xyz/api/v1/widget/${profile.discord_user.id}?type=spotify&theme=dark`}
    width="350"
    height="110"
    allowtransparency="true"
    frameBorder="0"
    className='mt-4 mx-auto sm:mx-0'
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
/>
            </span>
            </div>
        </div>
    )
}

export default Profile
