export default async function handler(_, res) {
  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_API_KEY}/getChatMembersCount?chat_id=@atabekovfarrukh`
  );

  const response = await telegramResponse.json();
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    subscribers: response.result
  });
}
