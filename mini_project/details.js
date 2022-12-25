const url =new URL(location.href);
const id= url.searchParams.get('data');

const container = document.createElement('div');
container.className= "container";

const wrapper = document.createElement('div');
wrapper.className= "wrapper";

const posts = document.createElement('div');
posts.className= "posts";

container.append(wrapper, posts);
document.body.append(container);


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    .then (value =>value.json())
    .then (value => {
             for (const item in value) {

            const userDiv = document.createElement('div')
            if (typeof value[item] !== 'object') {
                userDiv.innerText = `${item}: ${value[item]}`
            } else {
                userDiv.innerText = `${item}:`

                for (const key in value[item]) {
                    const userInnerDiv = document.createElement('div');
                    if (typeof value[item][key] !== 'object') {
                        userInnerDiv.innerText = `${key}: ${value[item][key]}`;

                    } else {
                        userInnerDiv.innerText = `${key}:`;

                        for (const element in value[item][key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element}--${value[item][key][element]}`;
                            }
                            userInnerDiv.append(htmlDivElement);
                        }
                    }
                    userDiv.append(userInnerDiv);
                }
            }

            wrapper.append(userDiv);
        }
            const postButton = document.createElement('button');
            postButton.innerText = 'Post of current user';

            postButton.onclick = () => {


                fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                    .then(value => value.json())
                    .then(arr => {
                        for (const element of arr) {
                            const postDiv = document.createElement('div');
                            postDiv.innerText = `${element.title} `;
                            const anchor = document.createElement('a');
                            anchor.innerText = `Post details`;
                            postDiv.append(anchor);
                            anchor.href = `post-details.html?data=${element.id}`;
                            posts.append(postDiv);
                        }
                    });
                postButton.style.display="none";
            }


            wrapper.append(postButton);

    })