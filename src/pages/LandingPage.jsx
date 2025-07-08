import React, { useState } from "react";
import DragBall from "../components/DragBall";
import { Heart, MessageCircle, Bookmark, Search } from "lucide-react";
import { dummyPosts, sidebarData } from "../constants/utils";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [openCommentPostId, setOpenCommentPostId] = useState(null); // NEW

  const toggleLike = (id) => {
    setLikedPosts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const toggleSave = (id) => {
    setSavedPosts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const filteredPosts = dummyPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative p-6 space-y-10 font-sans bg-base-200 min-h-screen overflow-hidden">
      {/* DragBall */}
      <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
        <DragBall />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center z-10 relative">
        <div>
          <h1 className="text-5xl font-bold mb-2">SkillShowcase Explore</h1>
          <p className="text-gray-600 text-md max-w-xl">
            SkillShowcase is your personalized tech portfolio feed — explore
            projects, certifications, internships, and coding ranks shared by
            others in the community.
          </p>
        </div>
        <div className="relative">
          <img
            src="/snorlax.jpg"
            className="w-14 h-14 rounded-full cursor-pointer border-2 border-primary"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-base-100 rounded-md shadow-lg border z-10">
              <div
                className="p-2 hover:bg-base-300 cursor-pointer"
                onClick={() => navigate("/user-dashboard")}
              >
                Go to Dashboard
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 max-w-md">
        <Search size={20} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search posts..."
          className="input input-bordered w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Feed */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-base-100 shadow-md border rounded-xl p-4 flex flex-col justify-between min-h-[300px]"
            >
              <div className="space-y-4">
                <div className="text-xl font-semibold line-clamp-2 min-h-[48px]">
                  {post.title}
                </div>
                <div className="text-sm text-gray-500">{post.type}</div>
                <a
                  href={post.link}
                  className="text-blue-500 text-sm underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  View More
                </a>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between pt-2 border-t mt-4 text-sm text-gray-500">
                <div className="flex gap-4">
                  <span
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => toggleLike(post.id)}
                    style={{
                      color: likedPosts.includes(post.id) ? "red" : "",
                    }}
                  >
                    <Heart
                      size={16}
                      fill={likedPosts.includes(post.id) ? "red" : "none"}
                    />
                    Like
                  </span>
                  <span
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => setOpenCommentPostId(post.id)} // NEW
                  >
                    <MessageCircle size={16} /> Comment
                  </span>
                  <span
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => toggleSave(post.id)}
                    style={{
                      color: savedPosts.includes(post.id) ? "black" : "",
                    }}
                  >
                    <Bookmark
                      size={16}
                      fill={savedPosts.includes(post.id) ? "black" : "none"}
                    />
                    Save
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-base-100 shadow-lg rounded-xl p-6">
            <h2 className="text-lg font-bold mb-2">🎯 Filters</h2>
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-sm btn-outline">Most Liked</button>
              <button className="btn btn-sm btn-outline">Most Saved</button>
              <button className="btn btn-sm btn-outline">Projects</button>
              <button className="btn btn-sm btn-outline">Certifications</button>
            </div>
          </div>

          <div className="bg-base-100 shadow-lg rounded-xl p-6">
            <h2 className="text-lg font-bold mb-2">🏆 Leaderboard</h2>
            <ul className="list-decimal ml-4 text-sm text-gray-700">
              {sidebarData.leaderboard.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </div>

          <div className="bg-base-100 shadow-lg rounded-xl p-6">
            <h2 className="text-lg font-bold mb-2">🚀 Top Projects</h2>
            <ul className="list-disc ml-4 text-sm text-gray-700">
              {sidebarData.topProjects.map((proj, i) => (
                <li key={i}>{proj}</li>
              ))}
            </ul>
          </div>

          <div className="bg-base-100 shadow-lg rounded-xl p-6">
            <h2 className="text-lg font-bold mb-2">💡 Top Skills</h2>
            <div className="flex flex-wrap gap-2">
              {sidebarData.topSkills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 💬 Comment Modal */}
      {openCommentPostId !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[999]">
          <div className="bg-base-100 w-full max-w-md p-6 rounded-lg shadow-xl relative">
            <button
              onClick={() => setOpenCommentPostId(null)}
              className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-black"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">💬 Comments</h2>
            <textarea
              placeholder="Pen your thoughts..."
              className="textarea textarea-bordered w-full min-h-[120px]"
            ></textarea>
            <div className="flex justify-end mt-4">
              <button className="btn btn-primary btn-sm">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
