export async function translateText(text: string): Promise<string> {
    try {
        // React 요소나 HTML 태그가 포함된 경우 원본 반환
        if (typeof text !== 'string' || /<[^>]*>/g.test(text)) {
            return text;
        }

        const response = await fetch(
            `https://translation.googleapis.com/language/translate/v2?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    q: text,
                    target: 'en',
                }),
            },
        );

        const data = await response.json();
        return data.data.translations[0].translatedText;
    } catch (error) {
        return text;
    }
}
