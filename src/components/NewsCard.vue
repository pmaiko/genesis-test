<template>
  <div class="news-card">
    <div class="news-card__row">
      <div class="news-card__col news-card__col_left">
        <div class="news-card__avatar">
          <router-link :to="`/user/${_.get(authorMeta, 'name', '/')}`">
            <img :src="_.get(authorMeta, 'avatar', '')" alt="">
          </router-link>
        </div>
      </div>
      <div class="news-card__col news-card__col_center">
        <div class="news-card__user-info">
          <a href="#">
            <b class="news-card__user-nick-name">
              {{ _.get(authorMeta, 'nickName', '') }}
            </b>
          </a>
          <span class="news-card__user-name">
            {{ _.get(authorMeta, 'name', '') }}
          </span>
        </div>
        <div class="news-card__text">
          {{ text }}
        </div>
        <div class="news-card__music-meta">
          <b>{{ _.get(musicMeta, 'musicName', '') }}</b>
        </div>

        <div class="news-card__video">
          <BaseVideo
            :video="video"
          />
        </div>
      </div>
      <div class="news-card__col news-card__col_right">
        <div class="news-card__el">
          <div class="news-card__el-label">
            likes
          </div>
          <div class="news-card__el-value">
            {{ _.get(authorMeta, 'heart', '') }}
          </div>
        </div>
        <div class="news-card__el">
          <div class="news-card__el-label">
            video
          </div>
          <div class="news-card__el-value">
            {{ _.get(authorMeta, 'video', '') }}
          </div>
        </div>
        <div class="news-card__el">
          <div class="news-card__el-label">
            fans
          </div>
          <div class="news-card__el-value">
            {{ _.get(authorMeta, 'fans', '') }}
          </div>
        </div>
        <div class="news-card__el">
          <div class="news-card__el-label">
            following
          </div>
          <div class="news-card__el-value">
            {{ _.get(authorMeta, 'following', '') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    import BaseVideo from './Base/BaseVideo.vue';

    @Component({
        components: {
            BaseVideo,
        },
    })
    export default class News extends Vue {
        @Prop() private text!: string;
        @Prop() private authorMeta!: object;
        @Prop() private musicMeta!: object;
        @Prop() private videoUrl!: string;

        private video = {
            src: {
                mp4: this.videoUrl,
            },
        };
    }
</script>
