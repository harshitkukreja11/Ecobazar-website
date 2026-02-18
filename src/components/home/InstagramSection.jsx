import { FaInstagram } from "react-icons/fa";
import "./instagramSection.css";

const images = [
  "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
  "https://images.unsplash.com/photo-1610832958506-aa56368176cf",
  "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSodhbpuk5C--kldU5LTIffwnhuDy5hMsdMNJdLrnZsHE-CwgUZGOK7XR7nkdgNzrVVsviwWgn6NN5uu2Mu3hlPkAJZG_yyuLMKU4Bg79Fz&s=10",  
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmpJEsc7S8S41fXV2ZYsiGEG_OKJDZ-i6f5GahCuJ8-e3ULv4JLKLPCIzp7-50wNMkF241rjPHXY53qWzEo99VFJ-W5Ui3XqP0I6J9IKM8w&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqhugQDfarAnW31SEXj0hdnWReGMbUBABZRg&s",
];

export default function InstagramSection() {
  return (
    <section className="instagram-section py-5">
      <div className="container">

        <div className="instagram-header">
          <h3>Follow us on Instagram</h3>
        </div>

        <div className="instagram-grid">
          {images.map((img, index) => (
            <div key={index} className="insta-card">
              <img src={`${img}?auto=format&fit=crop&w=500&q=80`} alt="instagram" />
              <div className="insta-overlay">
                <FaInstagram />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
