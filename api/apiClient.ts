const apiClient = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get: async <T = any>(route: string, queryParameters?: Record<string, string | number | boolean>): Promise<T> => {
    let url = `${process.env.API_URL}${route}`;

    if (queryParameters) {
      url +=
        '?' +
        Object.entries(queryParameters)
          .map(([key, value]) => `${key}=${value}`)
          .join('&');
    }

    console.log(url);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await response.json();
  },
};

export default apiClient;
