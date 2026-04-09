import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import appwriteService from "../appwrite/config";
import authService from "../appwrite/auth";
import { Button, Input } from "../components";

function Profile() {
  const authUser = useSelector((state) => state.auth.userData);

  const [profile, setProfile] = useState(null);
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        // safety check
        if (!authUser) return;

        // try fetching profile
        let existingProfile = null;

        try {
          existingProfile = await appwriteService.getProfile(authUser.$id);
        } catch (_) {
          existingProfile = null;
        }

        // if profile exists
        if (existingProfile) {
          setProfile(existingProfile);
          setUsername(existingProfile.username);
        } 
        // else create profile
        else {
          const newProfile = await appwriteService.createProfile({
            userId: authUser.$id,
            username: authUser.name || "",
            email: authUser.email,
            imageId: "",
          });

          if (newProfile) {
            setProfile(newProfile);
            setUsername(newProfile.username);
          }
        }
      } catch (error) {
        console.error("Profile load error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [authUser]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      let imageId = profile.imageId;

      // upload new image if selected
      if (image) {
        const uploaded = await appwriteService.uploadProfileImage(image);
        if (uploaded) imageId = uploaded.$id;
      }

      const updated = await appwriteService.updateProfile(profile.$id, {
        username,
        email: profile.email,
        imageId,
      });

      if (updated) {
        setProfile(updated);
        alert("Profile updated successfully ✅");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  // ---- UI STATES ----
  if (loading) return <p className="text-center">Loading profile...</p>;
  if (!profile) return <p className="text-center">Setting up profile...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Profile</h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <Input
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <Input
          label="Email"
          value={profile?.email || ""}
          disabled
        />

        <Input
          label="Profile Image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {profile.imageId && (
          <img
            src={appwriteService.getFileView(profile.imageId)}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        )}

        <Button type="submit" className="w-full">
          Update Profile
        </Button>
      </form>
    </div>
  );
}

export default Profile;
