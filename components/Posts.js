import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Snapshot } from "recoil";
import { db } from "../firebase";
import Post from "./Post";

const DUMMY_DATA = [
  {
    id: "123",
    username: "Stannis Baratheon",
    userImg:
      "https://d.newsweek.com/en/full/437810/stannis-baratheon-game-thrones.jpg?w=1600&h=1600&q=88&f=1e33c5b6c3b48fa82e6532b3146a2d90",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/369b9ec5-dc46-43e8-913f-14d8e15c1100/dbjpkou-95fcdd2e-3225-4f34-8032-af971d4decb1.jpg/v1/fill/w_1024,h_683,q_75,strp/stannis_baratheon_fanart_by_lukemartinsart_dbjpkou-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvMzY5YjllYzUtZGM0Ni00M2U4LTkxM2YtMTRkOGUxNWMxMTAwXC9kYmpwa291LTk1ZmNkZDJlLTMyMjUtNGYzNC04MDMyLWFmOTcxZDRkZWNiMS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.yX8H96IprR6huj1z4DcxC7JYq2K9FgEPN7K3eDFjeQY",
    caption: "Stannis B",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsuscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );

    return () => {
      unsuscribe();
    }
  }, [db]);

  return (
    <>
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
          />
        ))}
      </div>
    </>
  );
};

export default Posts;



