// import NextAuth from "next-auth";
// import SpotifyProvider from "next-auth/providers/spotify";

// // Ini adalah konfigurasi utama untuk otentikasi Anda
// export const authOptions = {
//   // Configure satu atau lebih provider otentikasi
//   providers: [
//     SpotifyProvider({
//       clientId: process.env.SPOTIFY_CLIENT_ID as string,
//       clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
//     }),
//     // ...tambahkan provider lain di sini jika perlu
//   ],
// };

// // Inisialisasi NextAuth dengan konfigurasi di atas
// const handler = NextAuth(authOptions);

// // Export handler untuk digunakan oleh Next.js sebagai route
// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const LamanIzin =
  "https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,playlist-read-collaborative,playlist-modify-public,playlist-modify-private";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: LamanIzin,
    }),
  ],
});
