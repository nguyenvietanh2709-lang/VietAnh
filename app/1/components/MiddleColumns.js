"use client";
import { useState } from "react";

const initialPosts = [
  {
    id: "p1",
    name: "John Doe",
    time: "1 min",
    avatar: "https://www.w3schools.com/w3images/avatar2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    images: [
      "https://www.w3schools.com/w3images/lights.jpg",
      "https://www.w3schools.com/w3images/nature.jpg"
    ],
    likes: 0,
    liked: false,
    comments: [],
    showCommentInput: false,
  },
  {
    id: "p2",
    name: "Jane Doe",
    time: "16 min",
    avatar: "https://www.w3schools.com/w3images/avatar5.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [],
    likes: 0,
    liked: false,
    comments: [],
    showCommentInput: false,
  },
  {
    id: "p3",
    name: "Angie Jane",
    time: "32 min",
    avatar: "https://www.w3schools.com/w3images/avatar6.png",
    text: "Have you seen this? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: ["https://www.w3schools.com/w3images/nature.jpg"],
    likes: 0,
    liked: false,
    comments: [],
    showCommentInput: false,
  },
];

export default function MiddleColumns() {
  const [status, setStatus] = useState("");
  const [posts, setPosts] = useState(initialPosts);

  function addPost() {
    const text = status.trim();
    if (!text) return;

    setPosts((prev) => [
      {
        id: Date.now().toString(),
        name: "You",
        time: "just now",
        avatar: "https://www.w3schools.com/w3images/avatar3.png",
        text,
        images: [],
        likes: 0,
        liked: false,
        comments: [],
        showCommentInput: false,
      },
      ...prev,
    ]);
    setStatus("");
  }

  function toggleLikePost(id) {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const isLiked = p.liked;
          return {
            ...p,
            liked: !isLiked,
            likes: isLiked ? p.likes - 1 : p.likes + 1,
          };
        }
        return p;
      })
    );
  }

  function toggleCommentInput(id) {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, showCommentInput: !p.showCommentInput } : p))
    );
  }

  function addComment(id, text) {
    if (!text.trim()) return;
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          return { ...p, comments: [...(p.comments || []), text] };
        }
        return p;
      })
    );
  }

  return (
    <section className="space-y-4 lg:col-span-6">
      {/* Status Input Section */}
      <div className="rounded border bg-white shadow-sm p-4">
        <h6 className="opacity-60 text-sm mb-3">Social Media template by tailwind css</h6>
        <div className="mb-2 text-sm text-gray-600">Status: Feeling Blue</div>
        <textarea
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full rounded border border-gray-200 p-2 text-sm outline-none focus:border-blue-500 transition-colors"
          rows={2}
          placeholder="Write something.."
        />
        <div className="mt-2">
          <button
            onClick={addPost}
            className="flex items-center rounded bg-[#607d8b] px-4 py-1.5 text-sm text-white hover:bg-[#4d636f] transition-colors"
          >
            <i className="fa fa-pencil mr-2"></i> Post
          </button>
        </div>
      </div>

      {/* Feed Section */}
      {posts.map((post) => (
        <div key={post.id} className="rounded border bg-white shadow-sm p-4">
          {/* Header */}
          <div className="flex items-center mb-3">
            <img src={post.avatar} alt="avatar" className="h-12 w-12 rounded-full mr-4" />
            <div className="flex-1">
              <span className="float-right text-gray-400 text-sm">{post.time}</span>
              <h4 className="font-semibold text-gray-800">{post.name}</h4>
            </div>
          </div>

          <hr className="border-gray-100 mb-3" />

          <p className="text-sm text-gray-700 leading-relaxed mb-4 whitespace-pre-wrap">{post.text}</p>


          {post.images && post.images.length > 0 && (
            <div className={`grid ${post.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-2 mb-4`}>
              {post.images.map((img, idx) => (
                <img key={idx} src={img} alt="post content" className="w-full h-auto shadow-sm" />
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-1 mb-2">
            <button
              onClick={() => toggleLikePost(post.id)}
              className={`flex items-center px-4 py-1.5 text-sm rounded transition-colors ${post.liked
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-[#4d636f] hover:bg-[#3d4d56] text-white"
                }`}
            >
              <i className="fa fa-thumbs-up mr-2"></i> Like {post.likes > 0 && `(${post.likes})`}
            </button>
            <button
              onClick={() => toggleCommentInput(post.id)}
              className="flex items-center bg-[#435761] hover:bg-[#324148] text-white px-4 py-1.5 text-sm rounded transition-colors"
            >
              <i className="fa fa-comment mr-2"></i> Comment
            </button>
          </div>

          {/* Comments Section */}
          {(post.comments?.length > 0 || post.showCommentInput) && (
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">

              {/* Comment List */}
              {post.comments?.map((cmt, idx) => (
                <div key={idx} className="flex gap-2 text-sm text-gray-800 animate-in fade-in">
                  <img src="https://www.w3schools.com/w3images/avatar3.png" alt="avatar" className="w-8 h-8 rounded-full" />
                  <div className="bg-gray-100 px-3 py-2 rounded-2xl inline-block">
                    <span className="font-semibold mr-2">You</span>
                    {cmt}
                  </div>
                </div>
              ))}

              {/* Comment Input */}
              {post.showCommentInput && (
                <div className="flex gap-2 items-center mt-2 animate-in fade-in slide-in-from-top-2">
                  <img src="https://www.w3schools.com/w3images/avatar3.png" alt="avatar" className="w-8 h-8 rounded-full" />
                  <input
                    type="text"
                    placeholder="Viết bình luận..."
                    className="flex-1 rounded-full bg-gray-100 border border-gray-200 px-4 py-1.5 text-sm outline-none focus:ring-1 focus:ring-blue-500"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        addComment(post.id, e.target.value);
                        e.target.value = "";
                      }
                    }}
                  />
                </div>
              )}

            </div>
          )}

        </div>
      ))}
    </section>
  );
}