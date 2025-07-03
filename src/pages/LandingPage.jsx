import React from 'react'

const LandingPage = () => {
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Welcome to Skill Showcase</h1>
                <p className="py-6">Explore, Share, and Showcase your skills with the community.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            </div>
        </div>
    
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
            {/* Here you can map through dummyPosts to display them */}
        </div>
    </div>
  )
}

export default LandingPage