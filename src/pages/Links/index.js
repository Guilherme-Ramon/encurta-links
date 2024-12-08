import "./links.css";
import { useState, useEffect } from "react";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getLinkSave, deleteLink } from "../../services/storeLinks";
import LinkItem from "../../components/LinkItem";

const encurtaLink = "@encurtaLink";

export default function Links() {
    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [emptyList, setEmptyList] = useState(false);

    useEffect(() => {
        async function getLink() {
            const result = await getLinkSave(encurtaLink);
            if (result.length === 0) {
                setEmptyList(true);
            }
            setMyLinks(result);
        }
        getLink();
    }, []);

    function handOpenLink(link) {
        setData(link);
        setShowModal(true);
    }

    async function handleDelete(id) {
        const result = await deleteLink(myLinks, id);
        if (result.length === 0) {
            setEmptyList(true);
        }
        setMyLinks(result);
    }

    return (
        <div className="links-container">
            <div className="links-header">
                <Link to="/">
                    <FiArrowLeft size={38} color="#fff" />
                </Link>
                <h1>Meus links</h1>
            </div>

            {emptyList && (
                <div className="links-item">
                    <h2 className="empty-text">Sua lista está vazia...</h2>
                </div>
            )}

            {myLinks.map((link) => (
                <div className="links-item" key={link.id}>
                    <button className="link" onClick={() => handOpenLink(link)}>
                        <FiLink size={18} color="#fff" />
                        {link.long_url}
                    </button>
                    <button
                        className="link-delete"
                        onClick={() => handleDelete(link.id)}
                    >
                        <FiTrash size={24} color="#ff5454" />
                    </button>
                </div>
            ))}
            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )}
        </div>
    );
}
