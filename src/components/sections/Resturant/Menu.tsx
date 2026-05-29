import { useMenu } from "../../../hooks/useMenu";

const disclaimer =
    "It takes 25-30 Min to Prepare the Food. Last food Order will Be Taken until 9:25 Pm. Restaurant Is Open From 7 Am Till 10 Pm. Once Order Taken Will not be cancelled (Cancelled Charge 7%). Bringing Drinks And food from Outside Is strictly Prohibited.";

const Menu = () => {
    const { data: menuSections, isLoading, error } = useMenu();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200">
        <div className="hotel-card text-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-500 mx-auto mb-4"></div>
            <p className="text-text-secondary">Loading Menu...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen p-4">
        <div className="hotel-card text-center p-12">
            <h2 className="text-2xl font-serif font-bold text-red-500 mb-4">Error</h2>
            <p className="text-text-secondary mb-6">Unable to load the menu at this time.</p>
            <button onClick={() => window.location.reload()} className="btn-mithila px-12">Try Again</button>
        </div>
      </div>
    );
  }

    if (!menuSections || menuSections.length === 0) {
        return (
            <div className="max-w-6xl mx-auto px-4 py-12 text-center">
                <p>No menu items available</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-serif text-3xl md:text-5xl text-text-primary mb-4">Restaurant Menu</h1>
                <div className="w-24 h-1 bg-accent-400 mx-auto mb-6"></div>
                <p className="text-text-secondary max-w-2xl mx-auto text-lg italic">
                    Experience the authentic flavors of Nepal with our carefully curated menu
                </p>
            </div>

            <div className="space-y-16">
                {menuSections.map((section) => (
                    <div key={section.title} className="bg-white rounded-xl shadow-sm border border-accent-100 overflow-hidden">
                        <div className="bg-accent-50 px-8 py-6 border-b border-accent-100">
                            <h2 className="text-3xl font-serif font-bold text-accent-700">{section.title}</h2>
                        </div>
                        <div className="p-8">
                            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                                {section.subsections.map((sub) => (
                                    <div key={sub.title} className="flex flex-col">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider border-l-4 border-accent-400 pl-4">{sub.title}</h3>
                                            {sub.description && (
                                                <p className="text-text-secondary text-sm mt-2 italic pl-4 opacity-80">{sub.description}</p>
                                            )}
                                        </div>
                                        <ul className="space-y-4 pl-4">
                                            {sub.items.map((item) => (
                                                <li key={item.name} className="flex justify-between items-baseline gap-4 group">
                                                    <span className="text-text-primary font-medium group-hover:text-accent-600 transition-colors">{item.name}</span>
                                                    <div className="flex-1 border-b border-dotted border-gray-300 mb-1 opacity-40"></div>
                                                    <span className="text-accent-500 font-bold whitespace-nowrap">{item.price}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-primary-100/50 text-sm text-text-secondary p-8 rounded-xl border border-primary-200/50 shadow-inner">
                <div className="flex items-start gap-4">
                    <span className="text-2xl">📋</span>
                    <div>
                        <p className="font-bold text-text-primary mb-1 uppercase tracking-widest text-xs">Guest Information</p>
                        <p className="leading-relaxed opacity-90">{disclaimer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;