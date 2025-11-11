import { createStore } from 'vuex'
import tartu from "@/assets/images/tartu2024.jpg"
import defaultPic from "@/assets/images/default_pfp.jpg"

export default createStore({
    state: {
        postsList: [
            {
                "id": 1,
                "userName": "John Smith",
                "date": "Oct 22, 2025",
                "picture": "",
                "content": "I love Tartu so much.",
                "likes": 0,
            },
            {
                "id": 2,
                "userName": "Kaarel Tamm",
                "date": "Oct 2, 2025",
                "picture": tartu,
                "content": "Tartu 2024",
                "likes": 0,
            },
            {
                "id": 3,
                "userName": "Mihkel Kiik",
                "date": "Sep 28, 2025",
                "picture": "",
                "content": "print(\"Hello, World!\")",
                "likes": 0,
            },
            {
                "id": 4,
                "userName": "Anne Kask",
                "date": "Sep 25, 2025",
                "picture": defaultPic,
                "content": "System.out.println(\"Hello, World!\");",
                "likes": 0,
            },
            {
                "id": 5,
                "userName": "Triin Kuusik",
                "date": "Sep 20, 2025",
                "picture": "./hw3-vue/public/icon.ico",
                "content": "console.log(\"Hello, World!\");",
                "likes": 0,
            },
            {
                "id": 6,
                "userName": "Mari Mustikas",
                "date": "Sep 10, 2025",
                "picture": "",
                "content": "I just started learning Angular!",
                "likes": 0,
            },
            {
                "id": 7,
                "userName": "Meeri Lambake",
                "date": "Sep 11, 2025",
                "picture": "",
                "content": "Angular is not good. I prefer React.",
                "likes": 0,
            },
            {
                "id": 8,
                "userName": "Sergei Ivanov",
                "date": "Sep 12, 2025",
                "picture": "",
                "content": "I like Vue.js the most.",
                "likes": 0,
            },
            {
                "id": 9,
                "userName": "Andres Saar",
                "date": "Sep 13, 2025",
                "picture": "",
                "content": "I code my frontend in C. Anyone else?",
                "likes": 0,
            },
            {
                "id": 10,
                "userName": "Natalie Stern",
                "date": "Sep 14, 2025",
                "picture": "https://imgs.search.brave.com/ybCZuLmHHiIie1YZ44e-HZSORZ-qb69Y_RMxKlUlGG0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMzMvMTM2MTMz/LTAwNC0zMzg1RjZG/NS9nb2xkZW4tcmV0/cmlldmVyLmpwZw",
                "content": "I love my dog!",
                "likes": 0,
            }
        ]
    },
    getters: {
    },
    mutations: {
        ResetLikes: state => {
            state.postsList.forEach(post => post.likes = 0);
        },
        IncreaseLike(state, id) {
            const post = state.postsList.find(post => post.id === id);
            if (post) {
                post.likes++;
            }
        },
    },
    actions: {
        ResetLikesAct: act => {
            act.commit("ResetLikes");
        },
        IncreaseLikeAct(act, id) {
            act.commit("IncreaseLike", id);
        },
    },
})