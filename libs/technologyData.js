import { IoBrush, IoServer, IoCog, IoConstruct } from 'react-icons/io5'

const technologyData = {
    frontend: {
        title: "Frontend",
        icon: <IoBrush />,
        technologies: [
            { name: 'HTML5', image: "https://cdn.simpleicons.org/html5/E34F26" },
            { name: 'CSS3', image: "https://cdn.simpleicons.org/css3/1572B6" },
            { name: 'SCSS', image: "https://cdn.simpleicons.org/sass/CC6699" },
            { name: 'JavaScript', image: "https://cdn.simpleicons.org/javascript/F7DF1E" },
            { name: 'TypeScript', image: "https://cdn.simpleicons.org/typescript/3178C6" },
            { name: 'Angular', image: "https://cdn.simpleicons.org/angular/DD0031" },
            { name: 'React', image: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: 'Next.js', image: "https://cdn.simpleicons.org/nextdotjs/000000" },
            { name: 'Chakra-UI', image: "https://cdn.simpleicons.org/chakraui/319795" },
            { name: 'Angular Material', image: "https://cdn.simpleicons.org/angular/DD0031" },
            { name: 'Bootstrap', image: "https://cdn.simpleicons.org/bootstrap/7952B3" },
            { name: 'Syncfusion', image: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: 'jQWidgets', image: "https://cdn.simpleicons.org/jquery/0769AD" }
        ]
    },
    backend: {
        title: "Backend",
        icon: <IoServer />,
        technologies: [
            { name: '.NET', image: "https://cdn.simpleicons.org/dotnet/512BD4" },
            { name: 'Entity Framework', image: "https://cdn.simpleicons.org/dotnet/512BD4" },
            { name: 'REST API', image: "https://cdn.simpleicons.org/apifox" },
            { name: 'Node.js', image: "https://cdn.simpleicons.org/nodedotjs/339933" },
            { name: 'SQL Server', image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
            { name: 'MySQL', image: "https://cdn.simpleicons.org/mysql/4479A1" },
            { name: 'PostgreSQL', image: "https://cdn.simpleicons.org/postgresql/336791" },
            { name: 'MongoDB', image: "https://cdn.simpleicons.org/mongodb/47A248" },
            { name: 'SQLite', image: "https://cdn.simpleicons.org/sqlite/003B57" },
            { name: 'Docker', image: "https://cdn.simpleicons.org/docker/2496ED" },
            { name: 'Kafka', image: "https://cdn.simpleicons.org/apachekafka" },
            { name: 'RabbitMQ', image: "https://cdn.simpleicons.org/rabbitmq/FF6600" },
            { name: 'Liquibase', image: "https://cdn.simpleicons.org/liquibase/000000" },
            { name: 'Dapper', image: "https://cdn.simpleicons.org/nuget/004880" },
            { name: 'XUnit.NET', image: "https://cdn.simpleicons.org/dotnet" },
            { name: 'Moq', image: "https://cdn.simpleicons.org/github/181717" }
        ]
    },
    devops: {
        title: "DevOps & Project Management",
        icon: <IoCog />,
        technologies: [
            { name: 'Git', image: "https://cdn.simpleicons.org/git/F05032" },
            { name: 'GitHub', image: "https://cdn.simpleicons.org/github/181717" },
            { name: 'GitLab', image: "https://cdn.simpleicons.org/gitlab/FCA121" },
            { name: 'BitBucket', image: "https://cdn.simpleicons.org/bitbucket/0052CC" },
            { name: 'Jenkins', image: "https://cdn.simpleicons.org/jenkins/D24939" },
            { name: 'Jira', image: "https://cdn.simpleicons.org/jira/0052CC" },
            { name: 'Confluence', image: "https://cdn.simpleicons.org/confluence/0052CC" },
            { name: 'Scrum', image: "https://cdn.simpleicons.org/scrumalliance/000000" },
            { name: 'Kanban', image: "https://cdn.simpleicons.org/trello/0052CC" },
            { name: 'Portainer', image: "https://cdn.simpleicons.org/docker/2496ED" },
            { name: 'Rancher', image: "https://cdn.simpleicons.org/rancher/0074AE" }
        ]
    },
    tools: {
        title: "Tools & Platforms",
        icon: <IoConstruct />,
        technologies: [
            { name: 'Vercel', image: "https://cdn.simpleicons.org/vercel/000000" },
            { name: 'Swagger', image: "https://cdn.simpleicons.org/swagger/85EA2D" },
            { name: 'Postman', image: "https://cdn.simpleicons.org/postman/FF6C37" },
            { name: 'Nginx', image: "https://cdn.simpleicons.org/nginx/009639" },
            { name: 'WordPress', image: "https://cdn.simpleicons.org/wordpress/21759B" },
            { name: 'MS Reports', image: "https://cdn.simpleicons.org/chartdotjs" }
        ]
    }
}

export default technologyData; 