import React, { useEffect, useState } from 'react';

import { Channels } from '../components';

import { channelsMock } from '../services/mock/index';

function HomePage() {

    return (
        <>
            {channelsMock && 
                <Channels 
                    channels={channelsMock}
                />
            }
        </>
    )

};

export default HomePage;