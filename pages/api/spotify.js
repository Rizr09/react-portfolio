import React from "react";
import ReactMarkdown from 'react-markdown'

const NowPlaying = () => {
    const markdown = '[![spotify-github-profile](https://spotify-github-profile.vercel.app/api/view?uid=fc8y4939uhihepg1ey5bvvvs6&cover_image=true&theme=natemoo-re&show_offline=false&background_color=121212&bar_color=53b14f&bar_color_cover=false)](https://spotify-github-profile.vercel.app/api/view?uid=fc8y4939uhihepg1ey5bvvvs6&redirect=true)';

    return (
        <div className='flex mt-5 content-center'>
            <div className='mx-auto bg-gray-900 rounded-lg shadow-xl p-5 dark:bg-gray-800'>
                {// eslint-disable-next-line
                <ReactMarkdown children={markdown} />}
            </div>
        </div>
    );
};

export default NowPlaying;