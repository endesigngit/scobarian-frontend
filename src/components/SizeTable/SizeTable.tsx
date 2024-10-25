import styles from "./SizeTable.module.css"

export default function SizeTable() {
  return (
    <div className={styles.size_table}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td></td>
            <th>А - Длина по груди, см</th>
            <th>B - Длина по спине, см</th>
            <th>C - Длина рукава, см</th>
          </tr>
          <tr className={styles.row_P}>
            <td>XS</td>
            <td>49</td>
            <td>67</td>
            <td>61</td>
          </tr>
          <tr>
            <td>S</td>
            <td>51</td>
            <td>67</td>
            <td>62</td>
          </tr>
          <tr>
            <td>M</td>
            <td>53</td>
            <td>70</td>
            <td>63</td>
          </tr>
          <tr>
            <td>L</td>
            <td>55</td>
            <td>72</td>
            <td>64</td>
          </tr>
          <tr>
            <td>XL</td>
            <td>57</td>
            <td>74</td>
            <td>65</td>
          </tr>
          <tr>
            <td>XXL</td>
            <td>59</td>
            <td>76</td>
            <td>66</td>
          </tr>
          <tr>
            <td>3XL</td>
            <td>62</td>
            <td>78</td>
            <td>67</td>
          </tr>
          <tr>
            <td>4XL</td>
            <td>65</td>
            <td>81</td>
            <td>68</td>
          </tr>
          <tr>
            <td>5XL</td>
            <td>68</td>
            <td>81</td>
            <td>69</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
