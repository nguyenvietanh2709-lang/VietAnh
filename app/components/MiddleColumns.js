"use client";

import { useState } from "react";

const initialPosts = [
  {
    id: "p1",
    name: "John Doe",
    time: "1 min",
    avatar: "https://www.w3schools.com/w3images/avatar2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://www.w3schools.com/w3images/nature.jpg",
    likes: 0,
  },
  {
    id: "p2",
    name: "Jane Doe",
    time: "16 min",
    avatar: "https://www.w3schools.com/w3images/avatar5.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   
    likes: 0,
  },
  {
    id: "p3",
    name: "Angie Jane",
    time: "32 min",
    avatar: "https://www.w3schools.com/w3images/avatar6.png",
    image: "https://www.w3schools.com/w3images/nature.jpg",
     text: "Have you seen this? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    likes: 0,
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
        id: crypto.randomUUID(),
        name: "You",
        time: "now",
        avatar: "https://www.w3schools.com/w3images/avatar3.png",
        text,
        image: "",
        likes: 0,
      },
      ...prev,
    ]);

    setStatus("");
  }

  function likePost(id) {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p)),
    );
  }

  return (
    <section className="space-y-6 lg:col-span-6">
      {/* Status */}
      <div className="rounded-lg border bg-white shadow-sm">
        <div className="p-4">
          <div className="mb-2 text-sm font-semibold text-gray-700">
            Status: Feeling Blue
          </div>

          <textarea
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Write something.."
          />

          <div className="mt-3 flex justify-end">
            <button
              type="button"
              onClick={addPost}
              className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Feed */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="rounded-lg border bg-white shadow-sm"
        >
          <div className="p-4">
            <div className="flex items-start gap-3">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={post.avatar}
                alt=""
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="font-semibold">{post.name}</div>
                  <div className="text-xs text-gray-500">{post.time}</div>
                </div>
                <div className="mt-2 text-sm text-gray-700">{post.text}</div>
              </div>
            </div>

            {post.image ? (
              <img
                className="mt-4 w-full rounded-lg object-cover"
                src={post.image}
                alt=""
              />
            ) : null}

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => likePost(post.id)}
                className="rounded bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-black"
              >
                Like{" "}
                <span className="ml-1 font-medium text-gray-300">
                  ({post.likes})
                </span>
              </button>
              <button
                type="button"
                className="rounded bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-200"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

