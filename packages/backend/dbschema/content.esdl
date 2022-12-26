module content {
    # 
    # Post related
    # > Images, videos, text and etc.
    # 

    # Abstract post type
    abstract type Post {
        required property type -> Type;
    }; 

    # 
    # Content moderation related
    # > Such as post tags, post types and so on
    #

    # Allowed post types
    scalar type Type extending enum<IMAGE, VIDEO, STORY>;
    
    # Post tag
    type Tag {
        required property name -> str;
    };
}