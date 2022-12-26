module profile {
    type ScoredTag {
        required link tag -> content::Tag;
        property score -> decimal {
            default := 0;
        };
    };

    type Device {
        required property type -> DeviceType;
        property availableSpace -> decimal {
            default := 0;
        };
    };

    # Device type
    scalar type DeviceType extending enum<PHONE, COMPUTER, OTHER>;
}