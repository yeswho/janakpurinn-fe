import { Tabs, Tab } from "@nextui-org/react";
import { useMenu } from "../../../hooks/useMenu";
import { motion } from "framer-motion";

const disclaimer =
    "It takes 25-30 Min to Prepare the Food. Last food Order will Be Taken until 9:25 Pm. Restaurant Is Open From 7 Am Till 10 Pm. Once Order Taken Will not be cancelled (Cancelled Charge 7%). Bringing Drinks And food from Outside Is strictly Prohibited.";

const Menu = () => {
    const { data: menuSections, isLoading, error } = useMenu();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200">
        <motion.div 
          role="status"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hotel-card"
        >
          <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin fill-accent-500 mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <p className="mt-4 text-text-secondary font-medium">Loading...</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 p-4">
        <motion.div 
          className="hotel-card text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-red-500/80">
            <h2 className="text-2xl font-serif font-semibold mb-4 text-text-primary">Unable to Load Content</h2>
            <p className="mb-6 text-text-secondary">{(error as Error).message || 'Please try again later.'}</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        </motion.div>
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
                <h1 className="font-serif text-2xl md:text-2xl text-text-primary mb-4">Restaurant Menu</h1>
                <div className="w-24 h-1 bg-accent-400 mx-auto mb-6"></div>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    Experience the authentic flavors of Nepal with our carefully curated menu
                </p>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden sm:block">
                <Tabs
                    aria-label="Menu Sections"
                    variant="solid"
                    fullWidth
                    classNames={{
                        tabList: "gap-6 relative rounded-none p-0",
                        cursor: "w-full bg-accent-400 border border-gray-200/50",
                        tab: "data-[selected=true]:text-white",
                    }}
                    radius="full"
                >
                    {menuSections.map((section) => (
                        <Tab key={section.title} title={section.title}>
                            <div className="mt-8">
                                {section.subsections.map((sub) => (
                                    <div key={sub.title} className="mb-8">
                                        <h2 className="text-2xl font-semibold text-text-primary">{sub.title}</h2>
                                        {sub.description && (
                                            <p className="text-text-secondary text-sm mb-2">{sub.description}</p>
                                        )}
                                        <ul className="divide-y divide-gray-200 mt-4">
                                            {sub.items.map((item) => (
                                                <li key={item.name} className="flex justify-between py-2 text-text-secondary">
                                                    <span>{item.name}</span>
                                                    <span className="text-text-primary font-semibold">{item.price}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Tab>
                    ))}
                </Tabs>
            </div>
            
            {/* Mobile Accordion */}
            <div className="block sm:hidden">
                <div className="space-y-4">
                    {menuSections.map((section) => (
                        <details key={section.title} className="bg-white rounded-md border border-accent-100">
                            <summary className="cursor-pointer px-4 py-3 font-semibold text-accent-700 text-lg select-none">
                                {section.title}
                            </summary>
                            <div className="px-4 pb-4 pt-2">
                                {section.subsections.map((sub) => (
                                    <div key={sub.title} className="mb-6">
                                        <h3 className="text-base font-semibold text-text-primary">{sub.title}</h3>
                                        {sub.description && (
                                            <p className="text-text-secondary text-xs mb-2">{sub.description}</p>
                                        )}
                                        <ul className="divide-y divide-gray-200 mt-2">
                                            {sub.items.map((item) => (
                                                <li key={item.name} className="flex justify-between py-2 text-text-secondary text-sm">
                                                    <span>{item.name}</span>
                                                    <span className="text-text-primary font-semibold">{item.price}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </details>
                    ))}
                </div>
            </div>

            <div className="mt-12 bg-accent-50 text-sm text-text-secondary p-4 rounded-md border border-accent-100">
                <strong>Note:</strong> {disclaimer}
            </div>
        </div>
    );
};

export default Menu;