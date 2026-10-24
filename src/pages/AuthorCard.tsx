import {useNavigate} from "react-router-dom";
import {useBookContext} from "../book/provider/BookContextProvider.tsx";
import {useState} from "react";
import {useBooksByAuthorName} from "../book/hook/useApiQueries.tsx";


export default function AuthorCard  ({ author }: { author: any }) {
    const navigate = useNavigate();
    const { setBooks } = useBookContext();
    const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

    // Click လုပ်မှသာ သက်ဆိုင်ရာ author name နဲ့ query စလုပ်ပါမယ်
    const { data: books } = useBooksByAuthorName(selectedAuthor || "");

    const handleAuthorClick = () => {
        setSelectedAuthor(author.name);
    };

    // Data ဝင်လာတာနဲ့ Context ထဲထည့်ပြီး Page ပြောင်းပါမယ်
    if (books && selectedAuthor === author.name) {
        setBooks(books);
        navigate('/books');
    }

    return (
        <div className="col" onClick={handleAuthorClick} style={{ cursor: 'pointer' }}>
            <div className="card h-100 border-0 shadow-sm p-4 hover-shadow transition">
                <img
                    src={`/images/authors/${author.profileImage}`}
                    className="rounded-circle mx-auto mb-3 shadow-sm object-fit-cover"
                    alt={author.name}
                    style={{ width: "120px", height: "120px" }}
                />
                <div className="card-body p-0 mt-2">
                    <h5 className="card-title fw-bold mb-1">{author.name}</h5>
                    <p className="badge bg-secondary mb-2">{author.nationality}</p>
                    <p className="card-text text-muted small" style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                    }}>
                        {author.bio}
                    </p>
                </div>
            </div>
        </div>
    );
};
