const url = new URL(location.href);
const id = url.searchParams.get('data');

const container = document.createElement('div');
container.className = "container";
const wrapper = document.createElement('div');
wrapper.className = "wrapper";
const comments = document.createElement('div');
comments.className = "comments";
container.append(wrapper, comments);
document.body.append(container);

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    .then(value => value.json())
    .then(value => {
        for (const item in value) {

            const userDiv = document.createElement('div');
            userDiv.innerText = `${item}: ${value[item]}`;
            wrapper.append(userDiv);
        }

        const postButton = document.createElement('button');
        postButton.innerText = 'Post of current user';

        postButton.onclick = () => {
            console.log('id = ', id);
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(value => value.json())
                .then(arr => {
                    console.log("arrComments = ", arr);
                    for (const element of arr) {
                        const postDiv = document.createElement('div');

                        const pId = document.createElement('p');
                        pId.innerText = `id: ${element.id} `;

                        const pPostId = document.createElement('p');
                        pPostId.innerText = `postId: ${element.postId} `;

                        const pEmail = document.createElement('p');
                        pEmail.innerText = `email: ${element.email} `;

                        const pName = document.createElement('p');
                        pName.innerText = `name: ${element.name} `;

                        const pBody = document.createElement('p');
                        pBody.innerText = `body: ${element.body} `;

                        postDiv.append(pId, pPostId, pEmail, pName, pBody);

                        comments.append(postDiv);
                    }
                });
        }


        wrapper.append(postButton);

    })