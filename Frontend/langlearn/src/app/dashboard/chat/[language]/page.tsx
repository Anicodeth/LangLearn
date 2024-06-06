
export default function ChatPage({ params }: { params: { language : string } }) {
  return (
    <div>
      <h1>Chat Language: {params.language}</h1>
    </div>
  );
}