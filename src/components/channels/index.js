import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

import Card from '../card'

function Channels({ channels }) {
    const [activeChannel, setActiveChannel] = useState(0);
    const [elContainer, setElContainer] = useState([]);
    const elementsLine = 3;

    useEffect(() => {
        document.addEventListener('keydown', onkeydown)
    }, [])

    useEffect(() => {
        _centerScreen(activeChannel);
    }, [activeChannel])

    const _centerScreen = (position) => {
        const listChannel = document.querySelectorAll('.container');
        const item = listChannel[0].children[position];
        const bottomPx = item.getBoundingClientRect().bottom;
        
        if(bottomPx > 756) window.scrollTo(0, bottomPx + 10);
        if(bottomPx < 256) window.scrollTo(0, bottomPx - 10);
    };

    const onkeydown = (event) => {
        if (event.code === 'ArrowUp') {
            setActiveChannel((current) => (
                current >= elementsLine ? current-elementsLine : current
            ));
        }

        if (event.code === 'ArrowDown') {
            setActiveChannel((current) => {
                const nextValue = current+elementsLine;

                if (nextValue === channels.length) {
                    return channels.length-1
                }
                return nextValue < channels.length ? nextValue : current;
            });
        }

        if (event.code === 'ArrowLeft') {
            setActiveChannel((current) => {
                return current === 0 ? current : current-1;
            });
        }

        if (event.code === 'ArrowRight') {
            setActiveChannel((current) => {
                const next = current+1;

                if (current < channels.length-1) {
                    return (next % elementsLine === 0) ? current : current+1;
                }

                return current;
            });
        }
    }

    return (
        <S.Container className="container">
            {channels.map((channel, index) => (
                <Card
                    logo={channel.logo}
                    key={channel.pageIdentifier}
                    isActive={index === activeChannel}
                />
            ))}
        </S.Container>
    )
}

Channels.propTypes = {
    channels: PropTypes.arrayOf(
        PropTypes.shape({
            pageIdentifier: PropTypes.string.isRequired,
            logo: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default Channels
