import {useNavigate} from "react-router-dom";
import {useBookContext} from "../book/provider/BookContextProvider.tsx";
import {useState} from "react";
import {useBookByCategoryName} from "../book/hook/useApiQueries.tsx";
const INDIGO_COLOR = "#6610f2";
export default function CategoryCard ({ category }: { category: any })  {
    const navigate = useNavigate();
    const { setBooks } = useBookContext();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const { data: books } = useBookByCategoryName(selectedCategory || "");

    const handleCategoryClick = () => {
        setSelectedCategory(category.name);
    };

    if (books && selectedCategory === category.name) {
        setBooks(books);
        navigate('/books');
    }

    return (
        <div className="col" onClick={handleCategoryClick} style={{ cursor: 'pointer' }}>
            <div className="card h-100 shadow-sm border-0 bg-light text-center p-3 hover-shadow transition">
                <div className="card-body">
                    <div
                        className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{ width: '60px', height: '60px', backgroundColor: 'rgba(102, 16, 242, 0.1)' }}
                    >
                        <img src={`/images/categories/${category.image}`} alt={category.name} style={{ width: '30px' }} />
                    </div>
                    <h5 className="card-title fw-bold">{category.name}</h5>
                    <p className="card-text text-muted small">{category.description}</p>
                    <span className="text-decoration-none fw-semibold" style={{ color: INDIGO_COLOR }}>
                        View Books &rarr;
                    </span>
                </div>
            </div>
        </div>
    );
};
