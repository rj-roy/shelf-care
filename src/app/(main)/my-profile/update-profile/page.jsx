'use client';

import Link from "next/link";
import { useState, useRef } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

const UpdateProfile = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);
    const fileInputRef = useRef(null);
    const [profileImageUrl, setProfileImageUrl] = useState("");

    const handleFileSelect = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            setUploadError("File size must be less than 5MB");
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            setProfileImage(event.target.result);
        };
        reader.readAsDataURL(file);

        setIsUploading(true);
        setUploadError(null);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

        fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setUploadError(data.error.message);
                    setIsUploading(false);
                    return;
                }
                alert("Image uploaded successfully!");
                console.log("Image URL:", data.secure_url);
                setProfileImageUrl(data.secure_url);
                console.log(profileImageUrl, "from state");
                
                setIsUploading(false);

            })
            .catch((err) => {
                setUploadError("Upload failed. Please try again.");
                setIsUploading(false);
                console.error(err);
            });
    };

    const handlePhotoClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="page">
            <div className="max-w-md mx-auto px-8 py-12">
                <Link href={'/my-profile'}
                    className="flex items-center gap-2 text-sm text-muted mb-6 cursor-pointer hover:text-amber transition-colors">
                    ← Back to Profile
                </Link>
                <form className="bg-white border border-border rounded-2xl p-10">
                    <div className="font-serif text-2xl mb-1">Update Profile</div>
                    <div className="text-sm text-muted mb-8">Change your display name and profile photo.</div>
                    <fieldset className="mb-6">
                        <label className="block text-sm font-semibold text-ink mb-2 tracking-tight">
                            Profile Photo
                        </label>
                        <div
                            onClick={handlePhotoClick}
                            className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-amber hover:bg-amber-light transition-all"
                        >
                            <div className="w-20 h-20 rounded-full mx-auto mb-3 overflow-hidden bg-amber-light border-2 border-border flex items-center justify-center text-3xl text-amber">
                                {profileImage ? (

                                    <img src={profileImage} alt="Profile preview" className="w-full h-full object-cover" />
                                ) : (
                                    <span className="-mt-3">📷</span>
                                )}
                            </div>
                            <div className="text-sm text-muted">
                                {isUploading ? "Uploading..." : "Click to upload a photo"}
                            </div>
                            <div className="text-xs text-[#b0a090] mt-1">
                                JPG, PNG or GIF · Max 5MB
                            </div>
                            {uploadError && <div className="text-xs text-red-500 mt-2">{uploadError}</div>}
                        </div>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileSelect}
                        />
                    </fieldset>

                    <fieldset className="mb-6">
                        <label className="block text-sm font-semibold text-ink mb-2 tracking-tight">
                            Display Name
                        </label>
                        <input type="text" placeholder="Enter your name"
                            className="w-full px-4 py-3 border border-border rounded-lg text-base text-ink bg-parchment outline-none focus:border-amber focus:bg-white transition-all" />
                    </fieldset>
                    <button
                        type="submit"
                        disabled={isUploading}
                        className="w-full py-3 rounded-xl bg-amber text-ink font-bold text-base hover:bg-[#e09b12] transition-all mt-1 disabled:opacity-50 disabled:cursor-not-allowed">
                        {isUploading ? "Uploading..." : "Update Information"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;