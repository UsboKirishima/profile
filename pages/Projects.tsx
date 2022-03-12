import type { NextPage } from 'next';
import '../styles/Projects.module.css';
import { Navbar } from '../components/Navbar';
import Repo from '../components/Repo';
import { useEffect } from 'react';

const Projects: NextPage = () => {

    const fetchRepos = () => {
        fetch('https://api.github.com/users/UsboKirishima/repos').then(async res => (
            (await res.json())
            .map(({
                id,
                name,
                language,
                html_url,
                description
            }: {
                id: number;
                name: string;
                language: string;
                html_url: string;
                description: string;
            }) => (
                <Repo
                url={html_url}
                name={name}
                primaryLanguage={language}
                description={description}
                />
            ))
        ))
    }

    useEffect(() => {
        fetchRepos();
    })

    return(
        <>
        <Navbar />
        {fetchRepos()}
        </>
    );
}

export default Projects;