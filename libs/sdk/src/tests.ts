import MishokFactory, { CreatePost } from './index';

const instance = await (new MishokFactory()
    .withApiUrl("https://apis.odzi.dog/mishok/v1")
    .build());
