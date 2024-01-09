import Chat from "@/components/chat/chat"
import Info from "@/components/info/info"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Chat Bot</h1>
      <Info />
      <Chat />
    </main>
  );
}
