module content {
    # 
    # Post related
    # > Images, videos, text and etc.
    # 

    # Abstract post type
    abstract type Post {
        required property type -> Type;
    }; 

    # Image post type
    type Image extending Post {
        required property images -> array<str>;
    };

    # Video post type
    type Video extending Post {
        required property url -> str;
    };

    # Story post type
    type Story

    # 
    # Content moderation related
    # > Such as post tags, post types and so on
    #

    # Allowed post types
    scalar type ContentType extending enum<IMAGE, VIDEO, STORY>;
    
    # Post tag
    type Tag {
        required property name -> str;
    };
}