type ImageGenBody = {
    prompt: {
        gender: string;
        age: number | string;
        eye_color: string;
        skin_tone: string;
        body_type: string;
        hair_color: string;
        hair_style: string;
        outfit_style: string;
        background: string;
        facial_features: string;
    };
};

export default {
    async generateProfileImage(body: ImageGenBody) {
        const response = await fetch(
            'https://634ajyjn93.execute-api.us-east-1.amazonaws.com/generate-image',
            {
                method: 'POST',
                body: JSON.stringify(body),
            }
        );
        const data = await response.json();

        return data;
    },

    async getGeneratedImage(id: string) {
        const response = await fetch(
            `https://634ajyjn93.execute-api.us-east-1.amazonaws.com/get-generation?id=${id}`
        );

        const data = await response.json();

        return data;
    },
};
