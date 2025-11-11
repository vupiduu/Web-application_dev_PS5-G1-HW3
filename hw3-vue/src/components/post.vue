<template>
    <div class="post">
        <div class="post-header">
            <img class="post-profile-pic" src="@/assets/images/default_pfp.jpg"></img>
            <div class="post-user-info">
                <span class="username">{{ post.userName }}</span>
                <span class="post-date">{{ post.date }}</span>
            </div>
        </div>
        <div class="post-content">
            <img v-if="post.picture" :src="post.picture" class="post-image" />
            <p>{{ post.content }}</p>
        </div>
        <div class="post-actions">
            <p>{{ post.likes }}</p>
            <button v-on:click="LikePost" class="like-btn">👍 Like</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "Post",

    props: {
        post: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {

        }
    },
    methods: {
        LikePost: function () {
            this.$store.dispatch("IncreaseLikeAct", this.post.id);
        },
    },
};

</script>

<style scoped>
.post {
    background: #d9d9d9;
    border: 1px solid #c6c6c6;
    margin-bottom: 20px;
    padding: 18px;
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, .08);
}

.post:last-child {
    margin-bottom: 0;
}

.post-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    gap: 12px;
}

.post-profile-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.post-user-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.username {
    font-weight: bold;
    color: #2b2b2b;
    font-size: 14px;
}

.post-date {
    color: #666;
    font-size: 12px;
}

.post-content {
    margin-bottom: 15px;
}

.post-content p {
    color: #2b2b2b;
    margin: 0 0 10px 0;
    line-height: 1.4;
    font-size: 14px;
}

.post-image {
    width: 100%;
    height: auto;
    border-radius: 6px;
    margin-bottom: 10px;
    border: 1px solid #cfcfcf;
}

.post-actions {
    display: flex;
    gap: 10px;
    border-top: 1px solid #c6c6c6;
    padding-top: 10px;
}

.like-btn {
    flex: 0, 0, 200;
    margin: 4;
    background: blue;
    color: white;
    max-width: 60px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    transition: background-color 0.2s;
}

.like-btn:hover {
    background: blue;
    filter: brightness(.90);
}
</style>
