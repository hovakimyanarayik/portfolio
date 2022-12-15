import { MailFilled } from "@ant-design/icons";
import { LinkedinOutlined, PhoneFilled } from "@ant-design/icons/lib/icons";
import styled from "styled-components";

const connectTypes = [
    {
        type: 'EMail',
        icon: <MailFilled />,
        way() {
            window.location.href = 'mailto:arayik.hovakimyan.contact@gmail.com'
        }
    },
    {
        type: 'Linkedin',
        icon: <LinkedinOutlined />,
        way() {
            window.open('https://www.linkedin.com/in/arayik-hovakimyan-4a75a3257/', '_blank')
        }
    },
    {
        type: '+374-98-68-22-66',
        icon: <PhoneFilled />,
    },
]

const Connect = () => {
    return ( 
        <ConnectWrapper>
            <h1>Interested? Connect with me!</h1>
            <ul>
                {connectTypes.map(c => (
                    <li key={c.type} onClick={c?.way}>{c.icon} {c.type}</li>
                ))}
            </ul>
        </ConnectWrapper>
     );
}

const ConnectWrapper = styled.div`
    grid-row: 5 / 6;
    grid-column: 1/3;

    & > ul {
        list-style: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 8vw;

        li {
            padding: .6rem 1rem;
            border: 1px solid var(--colors-text);
            border-radius: var(--radius);
            cursor: pointer;
        }
    }
`

export default Connect;